import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";
import { getProjectById } from "../../api/ProjectAPI";
import EditProjectForm from "../../components/project/EditProjectForm";

export default function EditProjectView() {
  const params = useParams();
  const projectId = params.projectId!;

  const { data, isError, isLoading } = useQuery({
    queryKey: ["editProject", projectId],
    queryFn: () => getProjectById(projectId),
    retry: false, // se puede colocar false o un numero para ver cuantas veces va a reintentar la conexion
  });

  if (isLoading) return "Cargando...";
  if (isError) return <Navigate to={"/404"} />;

  if (data) return <EditProjectForm data={data} projectId={projectId} />;
}
